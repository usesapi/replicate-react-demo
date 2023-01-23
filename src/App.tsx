import {useRequest} from 'ahooks';
import {Button, Form, Input, Modal, Spin} from 'antd';
import React, {useState} from 'react';
import {createPokemon} from './replicate';

export default function App() {
    const [pokemon, setPokemon] = useState<string | null>();

    const {loading, run} = useRequest(
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
                {pokemon && <img src={pokemon} alt={"pokemon"}/>}
            </Modal>
            <div className={"p-5 grid h-screen place-items-center"}>
                <div>
                    <div className={"flex flex-row justify-center items-center gap-5"}>
                        <div>
                            <img style={{width: "114px"}} alt={"Sapi"}
                                 src={"data:image/png;base64,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"}/>
                        </div>
                        <div className={"text-2xl"}>+</div>
                        <div className={"text-4xl font-bold"}>🚀 Replicate</div>
                    </div>
                    <div>
                        <div className={"text-4xl text-center"}>
                            Create AI apps with <a className={"underline text-cyan-800"} target={"_blank"}
                                                   href={"https://usesapi.com/replicate.html"}>Sapi</a> and <a
                            className={"underline text-cyan-800"} target={"_blank"}
                            href={"https://replicate.com"}>Replicate</a> without a backend.
                        </div>
                    </div>
                </div>
                <div
                    style={{"boxShadow": "15px 12px 0px 5px #DB8023"}}
                    className={
                        "bg-amber-200  p-10 max-w-2xl place-content-center text-center flex flex-col content-center"
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
                            onFinish={async ({prompt}: { prompt: string }) => {
                                run(prompt);
                            }}
                        >
                            <Form.Item
                                label="What should it look like?"
                                name="prompt"
                                rules={[{required: true, message: "Describe your Pokemon"}]}
                            >
                                <Input placeholder={"Yoda"} size={"large"}/>
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
                        </Form>
                    </Spin>
                </div>
                <div className={" text-3xl text-center mt-3"}>
                    <a className={"underline text-cyan-500"} target={"_blank"}
                       href={"https://sapi.gitbook.io/replicate.com-apps-tutorials/"}>Learn
                        how to create your own apps</a></div>
            </div>
        </>
    );
}
