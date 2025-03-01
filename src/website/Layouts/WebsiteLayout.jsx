import { Layout } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const WebsiteLayout = ({}) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content style={{ padding: "0px" }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default WebsiteLayout;
