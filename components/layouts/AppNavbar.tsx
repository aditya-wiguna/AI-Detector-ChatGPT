import { Layout } from "antd"
const { Header } = Layout;

export default function AppNavbar() {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" style={{color: '#FFF'}}>
        Aditya Wiguna
      </div>
    </Header>
  )
}
