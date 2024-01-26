import AppNavbar from './layouts/AppNavbar'
import AppFooter from './layouts/AppFooter'
import { Layout, Breadcrumb, theme } from 'antd'
const { Content } = Layout;
import '../app/globals.css'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <AppNavbar />
        <Content style={{ padding: '0 48px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>AI Detector</Breadcrumb.Item>
            <Breadcrumb.Item>ChatGPT Detector (English)</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 700,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </>
  )
}
