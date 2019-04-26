import React from 'react';

const ErrorPage = (props: any) => {
    const getImage = (status: number) => {
        switch (status) {
            case 404:
                return {
                    backgroundImage: 'url("/static/images/default/error_404.png")',
                };
            default:
                return {
                    backgroundImage: 'url("/static/images/default/error_404.png")',
                };
        }
    };

    return (
        <div className="blog-error-box">
            <div className="blog-error-image">
                <div className="blog-error-image-element" style={getImage(props.status)} />
            </div>
            <div className="blog-error-content">
                <h1>{props.status || 0} 페이지를 찾을 수 없습니다.</h1>
            </div>
        </div>
    );
};

export default ErrorPage;
