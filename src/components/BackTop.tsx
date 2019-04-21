import React, { Component } from 'react';
import { Icon, Button } from 'antd';

interface IProps {
    scrollStepInPx?: number;
    delayInMs: number;
}

interface IState {
    intervalId: NodeJS.Timeout;
}

class BackTop extends Component<IProps, IState> {
    private content: Element;

    static defaultProps = {
        scrollStepInPx: 50,
        delayInMs: 16.66,
    }

    state: IState = {
        intervalId: null,
    };

    componentDidMount() {
        this.content = document.querySelector('.ant-layout-content');
    }
      
    scrollStep = () => {
        if (this.content.scrollTop === 0) {
            clearInterval(this.state.intervalId);
        }
        this.content.scrollTo(0, this.content.scrollTop - this.props.scrollStepInPx);
    }
      
    scrollToTop = () => {
        const intervalId = setInterval(() => {
            this.scrollStep();
        }, this.props.delayInMs);
        this.setState({ intervalId });
    }
      
    render() {
        return (
            <Button className="blog-backtop" type="primary" shape="circle" onClick={this.scrollToTop}>
                <Icon type="to-top" style={{ fontSize: '1.25rem' }} />
            </Button>
        );
    }
}

export default BackTop;