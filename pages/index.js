import Link from 'next/link';

import Posts from '../components/Posts';
import '../styles/index.less';

// function PostLink(props) {
//   return (
//     <li>
//       <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//         <a>{props.title}</a>
//       </Link>
//     </li>
//   )
// }

// export default function Index() {
//   return (
//     <div>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" title="Hello Next.js" />
//         <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
//         <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
//       </ul>
//     </div>
//   )
// }

export default (props) => <Posts {...props} />;
