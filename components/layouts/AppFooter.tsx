import { Layout } from 'antd';

const { Footer } = Layout;

export default function AppFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      AI Detector ©{new Date().getFullYear()} Created by Aditya Wiguna
    </Footer>
  );
}
