import Link from 'next/link';
import { webConfig } from '../../utils/webConfig';

const fullWidthStyle = { width: '100%' };
export const postContent: { [id: string]: JSX.Element } = {
    'react-native-windows-setup': (
        <>
            <div style={{ paddingTop: 0 }} className="post-content-wrapper">
                At <strong>Code Reroute</strong>, our team recently tackled the
                crucial task of setting up a React Native bare setup on Windows.
                This journey wasn't without its challenges, but we believe it's
                essential to share our experiences to make life easier for other
                developers out there.💡
                <br />
                <br />
                Setting up React Native on Windows can be a daunting process.
                Without the right steps, it can quickly turn into a developer's
                nightmare, But fear not! Our team has put together a
                comprehensive guide to make this setup as painless as possible.
                <br />
                <br />
                From tackling dependency issues to configuring the environment,
                our step-by-step guide covers everything you need to know to get
                your React Native environment up and running smoothly. Check out
                our latest blog post where we detail the entire process, the
                hurdles we faced, and how we overcame them. Let's make
                development smoother and more enjoyable for everyone! 🚀
            </div>
            <Link href="https://nodejs.org/en/download" passHref>
                <a target="_blank">
                    <img
                        style={fullWidthStyle}
                        src={`${webConfig.basePath}/assets/blog/react-native-windows-setup/1.png`}
                    />
                </a>
            </Link>
            <Link
                href="https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html"
                passHref
            >
                <a target="_blank">
                    <img
                        style={fullWidthStyle}
                        src={`${webConfig.basePath}/assets/blog/react-native-windows-setup/2.png`}
                    />
                </a>
            </Link>
            <img
                style={fullWidthStyle}
                src={`${webConfig.basePath}/assets/blog/react-native-windows-setup/3.png`}
            />
            <img
                style={fullWidthStyle}
                src={`${webConfig.basePath}/assets/blog/react-native-windows-setup/4.png`}
            />
            <Link href="https://developer.android.com/studio" passHref>
                <a target="_blank">
                    <img
                        style={fullWidthStyle}
                        src={`${webConfig.basePath}/assets/blog/react-native-windows-setup/5.png`}
                    />
                </a>
            </Link>
            <img
                style={fullWidthStyle}
                src={`${webConfig.basePath}/assets/blog/react-native-windows-setup/6.png`}
            />
            <img
                style={fullWidthStyle}
                src={`${webConfig.basePath}/assets/blog/react-native-windows-setup/7.png`}
            />
            <img
                style={fullWidthStyle}
                src={`${webConfig.basePath}/assets/blog/react-native-windows-setup/8.png`}
            />
        </>
    ),
};
