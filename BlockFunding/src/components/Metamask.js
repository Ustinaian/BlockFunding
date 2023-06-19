import React from "react";
import { Button, Alert } from "react-bootstrap";
const Metamask = (prop) => {
  return (
    <div className="cont">
      <h2>BlockFunding</h2>
      <h3 className="line">基于区块链的去中心化众筹平台</h3>
      <p>区块链课程大作业</p>
      <Button className="metamask" onClick={prop.walletConnect}>
        连接你的钱包
      </Button>
      {prop.walletPage && (
        <div className="alertlink">
          在这里
          <Alert.Link className="link" href="https://metamask.io/download/">
            {" "}
            安装Metamask
          </Alert.Link>
        </div>
      )}
    </div>
  );
};

export default Metamask;