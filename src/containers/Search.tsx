import React, { Component } from 'react';
import { Input, Tag, Icon } from 'antd';
import { RouteChildrenProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import localStorage from 'store/storages/localStorage';

import { CSSMapper } from '../types/utils';
import { metadataService } from '../services';
import { ITags } from '../types/tag';
import { TagActions } from '../actions/tags';
import { IReducer } from '../reducers';
import { IPost } from '../types/post';
import MediaQuery from 'react-mqls';
import Dialog from '../components/Dialog';
import Events from '../utils/Events';

interface IProps extends RouteChildrenProps {
    setTags: (args?: any) => void;
    onCancel?: () => void;
    post: IPost;
}

interface IState {
    tags: ITags;
    search?: string;
    searchHistory: string[];
    postHistory: { [key: string]: any }[];
    isMobile: boolean;
    collapsed: boolean;
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
    tag: {
        margin: 8,
    },
    historyList: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        margin: 8,
    },
    history: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: 8,
    },
    historyAction: {
        display: 'flex',
        justifyContent: 'flex-end',
        flex: 1,
    },
    historyClear: {
        display: 'flex',
        justifyContent: 'center',
        padding: 8,
    },
}

class Search extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        let isMobile = false;
        if (typeof window.matchMedia !== 'function') {
            console.error('Does not support matchMedia');
        } else {
            const mql = window.matchMedia('(min-width: 576px)');
            isMobile = !mql.matches;
            mql.addListener((e) => {
                this.setState({
                    isMobile: !e.matches,
                });
            });
        }
        this.state = {
            tags: {},
            search: '',
            searchHistory: [],
            postHistory: [],
            isMobile,
            collapsed: false,
        };
    }

    componentDidMount() {
        Events.on('searchcollapse', () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        });
        const { location } = this.props;
        const params = new URLSearchParams(location.search);
        const search = params.get('search');
        const searchHistory = JSON.parse(localStorage.read('searchHistory')) || [];
        const postHistory = JSON.parse(localStorage.read('postHistory')) || [];
        this.setState({
            search,
            searchHistory,
            postHistory,
        });
        metadataService.getTags().then(response => {
            this.props.setTags(response.data);
            this.setState({
                tags: response.data,
            });
        });
    }

    componentWillReceiveProps(nextProps: IProps) {
        if (this.state.isMobile
        && (nextProps.location.pathname !== this.props.location.pathname)) {
            this.setState({
                collapsed: false,
            });
        }
        if (nextProps.post !== this.props.post) {
            const postHistory = JSON.parse(localStorage.read('postHistory')) || [];
            this.setState({
                postHistory,
            });
        }
    }

    handleClick = (key: string) => {
        if (this.state.isMobile) {
            this.handleCancel();
        }
        this.props.history.push(`/?tag=${key}`);
        this.props.location.pathname = `/?tag=${key}`;
    }

    handleSearch = (value: string) => {
        if (value && value.length) {
            const findIndex = this.state.searchHistory.indexOf(value);
            if (findIndex >= 0) {
                this.state.searchHistory.splice(findIndex, 1);
            }
            this.state.searchHistory.unshift(value);
            localStorage.write('searchHistory', JSON.stringify(this.state.searchHistory));
            this.setState({
                searchHistory: this.state.searchHistory,
            });
        }
        if (this.state.isMobile) {
            this.handleCancel();
        }
        this.setState({
            search: value,
        });
        if (value.length) {
            this.props.history.push(`/?search=${value}`);
            this.props.location.pathname = `/?search=${value}`;
        } else {
            this.props.history.push('/');
            this.props.location.pathname = '/';
        }
    }

    handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            search: e.target.value,
        });
    }

    handleSelectSearchHistory = (search: string) => {
        if (this.state.isMobile) {
            this.handleCancel();
        }
        this.setState({
            search,
        });
        if (search.length) {
            this.props.history.push(`/?search=${search}`);
            this.props.location.pathname = `/?search=${search}`;
        } else {
            this.props.history.push('/');
            this.props.location.pathname = '/';
        }
    }

    handleSelectPostHistory = (post: any) => {
        if (this.state.isMobile) {
            this.handleCancel();
        }
        this.props.history.push(post.path);
        this.props.location.pathname = post.path;
    }

    handleDeleteSearchHistory = (index: number) => {
        this.state.searchHistory.splice(index, 1);
        localStorage.write('searchHistory', JSON.stringify(this.state.searchHistory));
        this.setState({
            searchHistory: this.state.searchHistory,
        });
    }

    handleDeletePostHistory = (index: number) => {
        this.state.postHistory.splice(index, 1);
        localStorage.write('postHistory', JSON.stringify(this.state.postHistory));
        this.setState({
            postHistory: this.state.postHistory,
        });
    }

    handleClearSearchHistory = () => {
        localStorage.write('searchHistory', JSON.stringify([]));
        this.setState({
            searchHistory: [],
        });
    }

    handleClearPostHistory = () => {
        localStorage.write('postHistory', JSON.stringify([]));
        this.setState({
            postHistory: [],
        });
    }

    handleCancel = () => {
        this.setState({
            collapsed: false,
        });
    }

    render() {
        const { isMobile, collapsed, tags, search, searchHistory, postHistory } = this.state;
        return (
            <Dialog
                visible={collapsed}
                width={isMobile ? '100%' : '50%'}
                closable={!isMobile}
                onCancel={this.handleCancel}
                style={{ maxWidth: isMobile ? '100%' : null }}
                contentStyle={{ padding: 0 }}
                titleStyle={{
                    backgroundColor: '#fff',
                    padding: isMobile ? 0 : null,
                    width: isMobile ? null : '100%',
                }}
                footerStyle={{ justifyContent: 'center' }}
                footer={(
                    <a href="https://github.com/salgum1114" target="_blank">
                        <Icon style={{ fontSize: '1.25rem' }} type="github" />
                    </a>
                )}
            >
                <div className="blog-search" style={styles.container}>
                    <MediaQuery
                        queries={[
                            {
                                query: '(min-width: 576px)',
                                component: (
                                    <div style={styles.search}>
                                        <Input.Search
                                            onChange={this.handleChangeSearch}
                                            onSearch={this.handleSearch}
                                            value={search}
                                        />
                                    </div>
                                ),
                            },
                            {
                                query: '(max-width: 575px)',
                                component: (
                                    <div style={{ margin: 8 }}>
                                        <Input.Search
                                            prefix={<Icon type="arrow-left" onClick={this.handleCancel} />}
                                            onChange={this.handleChangeSearch}
                                            onSearch={this.handleSearch}
                                            value={search}
                                            style={{ height: 48 }}
                                        />
                                    </div>
                                ),
                            },
                        ]}
                    />
                    <div style={styles.search}>
                        <h4>최근 검색</h4>
                        {
                            searchHistory.reduce((prev, curr, index) => {
                                if (index > 10) {
                                    return prev;
                                }
                                return prev.concat(
                                    <div
                                        className="blog-search-history"
                                        key={curr}
                                        style={styles.historyList}
                                        onClick={() => this.handleSelectSearchHistory(curr)}
                                    >
                                        <Icon type="clock-circle" theme="filled" />
                                        <div style={styles.history} >
                                            {curr}
                                        </div>
                                        <div style={styles.historyAction}>
                                            <Icon type="close" onClick={(e) => { e.stopPropagation(); this.handleDeleteSearchHistory(index); }} />
                                        </div>
                                    </div>
                                )
                            }, [])
                        }
                        {
                            searchHistory.length ? (
                                <a onClick={this.handleClearSearchHistory} style={styles.historyClear}>최근 검색 모두 지우기</a>
                            ) : (
                                <div style={{ ...styles.historyClear, color: '#999999' }}>검색 기록이 없습니다</div>
                            )
                        }
                    </div>
                    <div style={styles.search}>
                        <h4>최근 기록</h4>
                        {
                            postHistory.reduce((prev, curr, index) => {
                                if (index > 10) {
                                    return prev;
                                }
                                return prev.concat(
                                    <div
                                        className="blog-search-history"
                                        key={curr.path}
                                        style={styles.historyList}
                                        onClick={() => this.handleSelectPostHistory(curr)}
                                    >
                                        <Icon type="clock-circle" theme="filled" />
                                        <div style={styles.history} >
                                            {curr.title}
                                        </div>
                                        <div style={styles.historyAction}>
                                            <Icon type="close" onClick={(e) => { e.stopPropagation(); this.handleDeletePostHistory(index); }} />
                                        </div>
                                    </div>
                                )
                            }, [])
                        }
                        {
                            postHistory.length ? (
                                <a onClick={this.handleClearPostHistory} style={styles.historyClear}>최근 기록 모두 지우기</a>
                            ) : (
                                <div style={{ ...styles.historyClear, color: '#999999' }}>읽은 기록이 없습니다</div>
                            )
                        }
                    </div>
                    <div style={styles.tags}>
                        <h4>전체 태그</h4>
                        {
                            Object.keys(tags).map(key => {
                                const tag = tags[key];
                                return (
                                    <Tag key={key} style={styles.tag} onClick={() => this.handleClick(key)}>{`${key} (${tag.total})`}</Tag>
                                );
                            })
                        }
                    </div>
                </div>
            </Dialog>
        );
    }
}

const mapStateToProps = (state: IReducer) => ({
    post: state.posts.post,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    setTags: TagActions.setTags,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);