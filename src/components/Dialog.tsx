import React, { Component } from 'react';
import classnames from 'classnames';
import { Button, Divider, Icon } from 'antd';
import { ButtonProps } from 'antd/lib/button';

export interface IDialogProps {
    style?: React.CSSProperties;
    className?: string;
    content?: React.ReactNode;
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    footer?: React.ReactNode;
    placement?: 'right' | 'left' | 'top' | 'bottom';
    titleStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    footerStyle?: React.CSSProperties;
    okButtonProps?: ButtonProps;
    cancelButtonProps?: ButtonProps;
    okText?: React.ReactNode;
    cancelText?: React.ReactNode;
    onOk?: (args?: any) => void;
    onCancel?: (args?: any) => void;
    visible?: boolean;
    closable?: boolean;
    width?: string | number;
    extra?: React.ReactNode;
    maskable?: boolean;
}

class Dialog extends Component<IDialogProps> {
    static defaultProps = {
        placement: 'right',
        closable: true,
        maskable: true,
        width: 400,
    }

    state = {
        visible: this.props.visible || false,
    }

    componentDidMount() {
        this.attachEvents();
    }

    componentWillReceiveProps(nextProps: IDialogProps) {
        if (nextProps.visible !== this.props.visible) {
            if (!nextProps.visible && !this.state.visible) {
                this.setState({
                    visible: true,
                });
                return;
            }
            if (!nextProps.visible && this.state.visible) {
                this.setState({
                    visible: false,
                });
                return;
            }
            this.setState({
                visible: nextProps.visible,
            });
        }
    }

    componentWillUnmount() {
        this.detachEvents();
    }

    onKeyDown = (e: KeyboardEvent) => {
        if (e.keyCode === 27 && this.state.visible) {
            e.stopPropagation();
            const { onCancel } = this.props;
            if (onCancel) {
                onCancel(false);
            }
            this.setState({
                visible: false,
            });
        }
    }

    onMouseDown = (e: MouseEvent) => {
        if (typeof e.toElement.className === 'string' && e.toElement.className.includes('mask')) {
            if (this.state.visible) {
                e.stopPropagation();
                const { onCancel } = this.props;
                if (onCancel) {
                    onCancel(false);
                }
                this.setState({
                    visible: false,
                });
            }
        }
    }

    attachEvents = () => {
        const { maskable } = this.props;
        if (maskable) {
            document.addEventListener('mousedown', this.onMouseDown);
        }
        document.addEventListener('keydown', this.onKeyDown);
    }

    detachEvents = () => {
        const { maskable } = this.props;
        if (maskable) {
            document.removeEventListener('mousedown', this.onMouseDown);
        }
        document.removeEventListener('keydown', this.onKeyDown);
    }

    handleCancel = () => {
        const { onCancel } = this.props;
        if (onCancel) {
            onCancel(false);
        }
    }

    handleOk = () => {
        const { onOk } = this.props;
        if (onOk) {
            onOk();
        }
    }

    renderFooter = () => {
        const { okText, cancelText, okButtonProps, cancelButtonProps } = this.props;
        return (
            <div className="blog-dialog-footer-actions">
                <Button className="blog-dialog-footer-cancel" {...cancelButtonProps} onClick={this.handleCancel}>
                    {cancelText || '취소'}
                </Button>
                <Button className="blog-dialog-footer-ok" type="primary" {...okButtonProps} onClick={this.handleOk}>
                    {okText || '확인'}
                </Button>
            </div>
        );
    }

    render() {
        const {
            children,
            placement,
            content,
            title,
            subTitle,
            footer,
            className,
            titleStyle,
            contentStyle,
            footerStyle,
            okText,
            cancelText,
            okButtonProps,
            cancelButtonProps,
            onOk,
            onCancel,
            visible,
            style,
            closable,
            width,
            extra,
            maskable,
            ...other
        } = this.props;
        const classname = classnames('blog-dialog', className, `blog-dialog-${placement}`, {
            'blog-dialog-show': this.state.visible,
            'blog-dialog-hide': !this.state.visible,
        });
        return (
            <div>
                {
                    this.state.visible ? (
                        <div className="blog-dialog-mask" />
                    ) : null
                }
                <div className={classname} style={{ ...style, width: this.state.visible ? width : 0 }} {...other}>
                    <div className="blog-dialog-title" style={titleStyle}>
                        {
                            title ? (
                                <div className="blog-dialog-title-wrapper">
                                    <div className="blog-dialog-title-main">
                                        {title}
                                    </div>
                                    <div className="blog-dialog-title-sub">
                                        {subTitle}
                                    </div>
                                </div>
                            ) : null
                        }
                        <div className="blog-dialog-title-extra">
                            {extra}
                        </div>
                        {
                            closable ? (
                                <div className="blog-dialog-title-close">
                                    <Icon
                                        type="close"
                                        onClick={this.handleCancel}
                                    />
                                </div>
                            ) : null
                        }
                    </div>
                    {
                        title ? (
                            <Divider style={{ margin: '4px 0' }} />
                        ) : null
                    }
                    <div className="blog-dialog-content" style={contentStyle}>
                        {children || content}
                    </div>
                    <div className="blog-dialog-footer" style={footerStyle}>
                        {footer || this.renderFooter()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;
