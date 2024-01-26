import Image from "next/image";
import AppLayout from "../components/AppLayout";
import {Form, Input, Button, Alert, Row, Col, Space, Typography} from 'antd';
import {DeliveredProcedureOutlined, ClearOutlined} from '@ant-design/icons';
import { useState } from "react";
import axios from "axios";

const { Title } = Typography;
const {TextArea} = Input;

export default function Home() {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{score: number}[]>([]);

  const onSubmitForm = async () => {
    setIsLoading(true);
    setResult([]);

    const res = await axios.post(
      'http://localhost:3000/api/predict',
      {
        text: form.getFieldValue('text')
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const data = await res.data.data;

    setResult(data);
    setIsLoading(false);
  }

  const clearForm = () => {
    form.resetFields();
    setResult([]);
  }

  return (
    <AppLayout>
      <Row>
        <Col md={24}>
          <Form form={form} layout="vertical">
            <Form.Item label="Text" name={'text'} rules={[{ required: true, message: 'Please input your text!' }]}>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Space>
                {isLoading &&
                  <Button type="primary" loading>
                    Predict
                  </Button>
                }
                {!isLoading &&
                  <Button type="primary" onClick={() => {
                    onSubmitForm();
                  }}>
                    <DeliveredProcedureOutlined />
                    Predict
                  </Button>
                }
                <Button type="primary" danger onClick={clearForm}>
                  <ClearOutlined />
                  Clear
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
        {result.length > 0 && (
          <Col md={24}>
            <Title level={3}>Result</Title>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Alert
                message="Human Text"
                description={result[0].score}
                type="success"
              />
              <Alert
                message="ChatGPT Text"
                description={result[1].score}
                type="error"
              />
            </Space>
          </Col>
        )}
      </Row>
    </AppLayout>
  )
}
