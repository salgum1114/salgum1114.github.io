import { withRouter } from 'next/router';

import Post from '../components/Post';

export default withRouter((props) => <Post {...props} />);
