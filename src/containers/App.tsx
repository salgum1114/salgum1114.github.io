import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Container from '../components/Container';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="http://fonts.googleapis.com/earlyaccess/notosanskr.css" />
                    <title>Dev.log</title>
                    <script type="text/javascript">
                    {`
                        (function(l) {
                            if (l.search) {
                            var q = {};
                            l.search.slice(1).split('&').forEach(function(v) {
                                var a = v.split('=');
                                q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
                            });
                            if (q.p !== undefined) {
                                window.history.replaceState(null, null,
                                l.pathname.slice(0, -1) + (q.p || '') +
                                (q.q ? ('?' + q.q) : '') +
                                l.hash
                                );
                            }
                            }
                        }(window.location))
                    `}
                    </script>
                </Helmet>
                <Container />
            </div>
        );
    }
}

export default App;
