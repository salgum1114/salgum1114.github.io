import React from 'react';

const ErrorPage = (props: any) => {
    const getImage = (status: number) => {
        switch (status) {
            case 404:
                return {
                    backgroundImage: 'url("/images/error_404.png")',
                };
            case 403:
                return {
                    backgroundImage: 'url("/images/error_403.png")',
                };
            case 500:
                return {
                    backgroundImage: 'url("/images/error_500.png")',
                };
            default:
                return {
                    backgroundImage: 'url("/images/error_404.png")',
                };
        }
    };

    return (
        <div className="error-box">
            <div className="error-image">
                <div className="error-image-element" style={getImage(props.status)} />
            </div>
            <div className="error-content">
                <h1>{props.status || 0} 페이지를 찾을 수 없습니다.</h1>
            </div>
        </div>
    );
};

export default ErrorPage;
