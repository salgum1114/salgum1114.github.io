import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import sortBy from 'lodash/sortBy';

import { IRoute } from '../types/utils';

interface IProps {
    routes: IRoute[];
    pathname: string;
}

interface IMenu extends IRoute {
    key: string;
    routes: IMenu[];
}

interface IState {
    menus: IMenu[];
    selectedKey: string;
}

class Menus extends Component<IProps, IState> {
    state: IState = {
        menus: [],
        selectedKey: this.props.pathname,
    }

    componentDidMount() {
        this.buildMenus();
    }

    componentWillReceiveProps(nextProps: IProps) {
        const { pathname } = nextProps;
        this.setState({
            selectedKey: pathname,
        });
    }

    buildMenus = () => {
        const menu = (routes?: IRoute[]) => {
            const newRoutes = routes || this.props.routes;
            const menus = newRoutes.reduce((prev: any, curr: IRoute) => {
                if (!curr.isMenu) {
                    return prev;
                }
                const obj = {
                    key: curr.path,
                    title: curr.title,
                    order: curr.order,
                    routes: curr.routes ? menu(curr.routes) : null,
                };
                prev.push(obj);
                return prev;
            }, []);
            return sortBy(menus, ['order']);
        };
        this.setState({
            menus: menu(),
        });
    }

    buildPath = (): string => {
        const { selectedKey } = this.state;
        const idPath = selectedKey.split('/').length === 4;
        if (idPath) {
            const lastIndex = selectedKey.lastIndexOf('/');
            return selectedKey.substring(0, lastIndex);
        }
        return null;
    }

    renderLinkTitle = (key: string, menu: IMenu) => (
        <Link to={key}>
            <span className="at-menu-title">{menu.title}</span>
        </Link>
    )

    renderTitle = (key: string, menu: IMenu) => (
        <div key={key}>
            <span className="at-menu-title">{menu.title}</span>
        </div>
    )

    renderMenus = () => {
        const { menus } = this.state;
        return menus.map(menu => {
            const { routes } = menu;
            if (routes && routes.length) {
                const subMenus = routes.map(sub => (
                    <Menu.Item key={sub.key}>
                        {this.renderLinkTitle(sub.key, sub)}
                    </Menu.Item>
                ));
                return (
                    <Menu.SubMenu
                        key={menu.key}
                        title={this.renderTitle(menu.key, menu)}
                    >
                        {subMenus}
                    </Menu.SubMenu>
                );
            }
            return (
                <Menu.Item key={menu.key}>
                    {this.renderLinkTitle(menu.key, menu)}
                </Menu.Item>
            );
        });
    }

    render() {
        const { routes } = this.props;
        const { selectedKey } = this.state;
        console.log(this.buildPath());
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={[this.buildPath() || selectedKey]}
                defaultOpenKeys={routes.map(r => r.path)}
                selectedKeys={[this.buildPath() || selectedKey]}
            >
                {this.renderMenus()}
            </Menu>
        );
    }
}

export default Menus;