import React, { Component } from 'react';
import { Input, Tag, Icon } from 'antd';
import localStorage from 'store/storages/localStorage';
import Router, { RouterProps } from 'next/router';

import { CSSMapper } from '../types/utils';
import { ITags } from '../types/tag';
import { IPost } from '../types/post';
import Dialog from '../components/Dialog';
import Events from '../utils/Events';

interface IProps {
    router?: RouterProps;
    tags: ITags;
    post?: IPost;
}

interface IState {
    search?: string | string[];
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
        cursor: 'pointer',
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
    state: IState = {
        search: '',
        searchHistory: [],
        postHistory: [],
        isMobile: false,
        collapsed: false,
    }

    componentDidMount() {
        Events.on('searchcollapse', () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        });
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
        this.setState({
            isMobile,
        });
        const { router } = this.props;
        let search;
        if (router.query) {
            search = router.query.search;
        }
        const searchHistory = JSON.parse(localStorage.read('searchHistory')) || [];
        const postHistory = JSON.parse(localStorage.read('postHistory')) || [];
        this.setState({
            search,
            searchHistory,
            postHistory,
        });
    }

    componentWillReceiveProps(nextProps: IProps) {
        if (this.state.isMobile
        && (nextProps.router.pathname !== this.props.router.pathname)) {
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
        Router.push(`/?tag=${key}`);
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
            Router.push(`/?search=${value}`);
        } else {
            Router.push('/');
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
            Router.push(`/?search=${search}`);
        } else {
            Router.push('/');
        }
    }

    handleSelectPostHistory = (post: any) => {
        if (this.state.isMobile) {
            this.handleCancel();
        }
        Router.push(post.path);
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
        const { tags } = this.props;
        const { isMobile, collapsed, search, searchHistory, postHistory } = this.state;
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
                    {
                        isMobile ? (
                            <div style={{ margin: 8 }}>
                                <Input.Search
                                    prefix={<Icon type="arrow-left" onClick={this.handleCancel} />}
                                    onChange={this.handleChangeSearch}
                                    onSearch={this.handleSearch}
                                    value={search}
                                    style={{ height: 48 }}
                                />
                            </div>
                        ) : (
                            <div style={styles.search}>
                                <Input.Search
                                    onChange={this.handleChangeSearch}
                                    onSearch={this.handleSearch}
                                    value={search}
                                />
                            </div>
                        )
                    }
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

export default Search;
