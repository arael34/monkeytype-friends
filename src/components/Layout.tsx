import Header from "./Header";

type Props = { children: any }

function Layout(props: Props) {
    return (
        <div>
            <Header />
            { props.children }
        </div>
    );
}

export default Layout;
