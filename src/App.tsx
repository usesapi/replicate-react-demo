import React, { useState } from "react";
import { Button, Modal, Form, Spin, Input } from "antd";
import { useRequest } from "ahooks";
import { createPokemon } from "./replicate";
import ReCAPTCHA from "react-google-recaptcha";
import { isTokenValid, authToken } from "./sapi-sdk";

export default function App() {
  const [pokemon, setPokemon] = useState<string | null>();
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const { loading, run } = useRequest(
    async (prompt) => {
      return await createPokemon(prompt);
    },
    {
      manual: true,
      onSuccess: (imgUrl) => {
        setPokemon(imgUrl);
      },
    }
  );
  return (
    <>
      <Modal
        footer={null}
        onCancel={() => setPokemon(null)}
        centered={true}
        open={Boolean(pokemon)}
      >
        {pokemon && <img src={pokemon} alt={"pokemon"} />}
      </Modal>
      <div className={"grid h-screen place-items-center"}>
        <div className={"bg-amber-100 border border-amber-400 p-4 rounded"}>
          This is an example of how to use Replicate API directly from a web
          app. No need for a backend.
        </div>
        <div
          className={
            "p-10 max-w-2xl place-content-center text-center flex flex-col content-center"
          }
        >
          <h1 className="text-3xl font-bold m-2">Create Pokemon!</h1>
          <Spin
            tip={"Creating your Pokemon! Few moments..."}
            size={"large"}
            spinning={loading}
          >
            <Form
              className={" "}
              disabled={loading}
              layout="vertical"
              name="basic"
              onFinish={async ({ prompt }: { prompt: string }) => {
                setShowCaptcha(false);
                if (isTokenValid()) {
                  setShowCaptcha(false);
                  run(prompt);
                  return;
                } else {
                  setShowCaptcha(true);
                }
              }}
            >
              <Form.Item
                label="What should it look like?"
                name="prompt"
                rules={[{ required: true, message: "Describe your Pokemon" }]}
              >
                <Input placeholder={"Yoda"} size={"large"} />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  className={"bg-amber-800"}
                  htmlType="submit"
                >
                  Create Pokemon
                </Button>
              </Form.Item>
              {showCaptcha && (
                <Form.Item>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeISQskAAAAAJwUFsaDtxel2mjL-cPxyt42fXb-"
                    onChange={async (token) => {
                      if (token) {
                        await authToken({ type: "captcha", value: token });
                      }
                    }}
                  />
                </Form.Item>
              )}
            </Form>
          </Spin>
        </div>
      </div>
    </>
  );
}
