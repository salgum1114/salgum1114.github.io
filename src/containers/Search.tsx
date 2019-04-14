import React, { Component } from 'react';
import { Input, Tag } from 'antd';
import { RouteChildrenProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { CSSMapper } from '../types/utils';
import { metadataService } from '../services';
import { ITags } from '../types/tag';
import { TagActions } from '../actions/tags';

interface IProps extends RouteChildrenProps {
    setTags: (args?: any) => void;
}

interface IState {
    tags: ITags;
    search?: string;
}

const styles: CSSMapper = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    search: {
        margin: 16,
    },
    tags: {
        margin: 16,
        flex: 1,
    },
}

class Search extends Component<IProps, IState> {
    state: IState = {
        tags: {},
        search: '',
    }

    componentDidMount() {
        const { location } = this.props;
        const params = new URLSearchParams(location.search);
        const search = params.get('search');
        this.setState({
            search,
        });
        metadataService.getTags().then(response => {
            this.props.setTags(response.data);
            this.setState({
                tags: response.data,
            });
        });
    }

    handleClick = (key: string) => {
        this.props.history.push(`/posts?tag=${key}`);
        this.props.location.pathname = `/posts?tag=${key}`;
    }

    handleSearch = (value: string) => {
        this.setState({
            search: value,
        })
        if (value.length) {
            this.props.history.push(`/posts?search=${value}`);
            this.props.location.pathname = `/posts?search=${value}`;
        } else {
            this.props.history.push('/posts');
            this.props.location.pathname = '/posts';
        }
    }

    handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            search: e.target.value,
        });
    }

    render() {
        const { tags, search } = this.state;
        return (
            <div style={styles.container}>
                <div style={styles.search}>
                    <Input.Search onChange={this.handleChangeSearch} onSearch={this.handleSearch} value={search} />
                </div>
                <div style={styles.tags}>
                    {
                        Object.keys(tags).map(key => {
                            const tag = tags[key];
                            return (
                                <Tag key={key} onClick={() => this.handleClick(key)}>{`${key} (${tag.total})`}</Tag>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    setTags: TagActions.setTags,
}, dispatch);

export default connect(null, mapDispatchToProps)(Search);