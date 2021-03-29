/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FlashbotsCheckAndSend } from "./FlashbotsCheckAndSend";

export class FlashbotsCheckAndSendFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<FlashbotsCheckAndSend> {
    return super.deploy(overrides || {}) as Promise<FlashbotsCheckAndSend>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FlashbotsCheckAndSend {
    return super.attach(address) as FlashbotsCheckAndSend;
  }
  connect(signer: Signer): FlashbotsCheckAndSendFactory {
    return super.connect(signer) as FlashbotsCheckAndSendFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashbotsCheckAndSend {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FlashbotsCheckAndSend;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_resultMatch",
        type: "bytes32",
      },
    ],
    name: "check32BytesAndSend",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_targets",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "_payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32[]",
        name: "_resultMatches",
        type: "bytes32[]",
      },
    ],
    name: "check32BytesAndSendMulti",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_resultMatch",
        type: "bytes",
      },
    ],
    name: "checkBytesAndSend",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_targets",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "_payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes[]",
        name: "_resultMatches",
        type: "bytes[]",
      },
    ],
    name: "checkBytesAndSendMulti",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610cfd806100206000396000f3fe60806040526004361061003f5760003560e01c806324835805146100445780633676290c1461006057806386b738be1461007c5780639af96d7e14610098575b600080fd5b61005e60048036038101906100599190610798565b6100b4565b005b61007a600480360381019061007591906108ae565b61010b565b005b61009660048036038101906100919190610731565b6101d1565b005b6100b260048036038101906100ad9190610817565b610228565b005b6100bf8383836102ee565b4173ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610105573d6000803e3d6000fd5b50505050565b815183511461011957600080fd5b805183511461012757600080fd5b60005b83518110156101845761017784828151811061014257fe5b602002602001015184838151811061015657fe5b602002602001015184848151811061016a57fe5b60200260200101516102ee565b808060010191505061012a565b504173ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156101cb573d6000803e3d6000fd5b50505050565b6101dc8383836103f3565b4173ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610222573d6000803e3d6000fd5b50505050565b815183511461023657600080fd5b805183511461024457600080fd5b60005b83518110156102a15761029484828151811061025f57fe5b602002602001015184838151811061027357fe5b602002602001015184848151811061028757fe5b60200260200101516103f3565b8080600101915050610247565b504173ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156102e8573d6000803e3d6000fd5b50505050565b600060608473ffffffffffffffffffffffffffffffffffffffff16846040516103179190610a76565b600060405180830381855afa9150503d8060008114610352576040519150601f19603f3d011682016040523d82523d6000602084013e610357565b606091505b50915091508161039c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039390610acd565b60405180910390fd5b80805190602001208380519060200120146103ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e390610aed565b60405180910390fd5b5050505050565b600060608473ffffffffffffffffffffffffffffffffffffffff168460405161041c9190610a76565b600060405180830381855afa9150503d8060008114610457576040519150601f19603f3d011682016040523d82523d6000602084013e61045c565b606091505b5091509150816104a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049890610acd565b60405180910390fd5b6020815110156104e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104dd90610a8d565b60405180910390fd5b600060208201519050838114610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890610aad565b60405180910390fd5b505050505050565b60008135905061054881610c99565b92915050565b600082601f83011261055f57600080fd5b813561057261056d82610b3e565b610b0d565b9150818183526020840193506020810190508385602084028201111561059757600080fd5b60005b838110156105c757816105ad8882610539565b84526020840193506020830192505060018101905061059a565b5050505092915050565b600082601f8301126105e257600080fd5b81356105f56105f082610b6a565b610b0d565b9150818183526020840193506020810190508385602084028201111561061a57600080fd5b60005b8381101561064a578161063088826106c8565b84526020840193506020830192505060018101905061061d565b5050505092915050565b600082601f83011261066557600080fd5b813561067861067382610b96565b610b0d565b9150818183526020840193506020810190508360005b838110156106be57813586016106a488826106dd565b84526020840193506020830192505060018101905061068e565b5050505092915050565b6000813590506106d781610cb0565b92915050565b600082601f8301126106ee57600080fd5b81356107016106fc82610bc2565b610b0d565b9150808252602083016020830185838301111561071d57600080fd5b610728838284610c55565b50505092915050565b60008060006060848603121561074657600080fd5b600061075486828701610539565b935050602084013567ffffffffffffffff81111561077157600080fd5b61077d868287016106dd565b925050604061078e868287016106c8565b9150509250925092565b6000806000606084860312156107ad57600080fd5b60006107bb86828701610539565b935050602084013567ffffffffffffffff8111156107d857600080fd5b6107e4868287016106dd565b925050604084013567ffffffffffffffff81111561080157600080fd5b61080d868287016106dd565b9150509250925092565b60008060006060848603121561082c57600080fd5b600084013567ffffffffffffffff81111561084657600080fd5b6108528682870161054e565b935050602084013567ffffffffffffffff81111561086f57600080fd5b61087b86828701610654565b925050604084013567ffffffffffffffff81111561089857600080fd5b6108a4868287016105d1565b9150509250925092565b6000806000606084860312156108c357600080fd5b600084013567ffffffffffffffff8111156108dd57600080fd5b6108e98682870161054e565b935050602084013567ffffffffffffffff81111561090657600080fd5b61091286828701610654565b925050604084013567ffffffffffffffff81111561092f57600080fd5b61093b86828701610654565b9150509250925092565b600061095082610bf2565b61095a8185610bfd565b935061096a818560208601610c64565b80840191505092915050565b6000610983601b83610c08565b91507f726573706f6e7365206c657373207468616e20333220627974657300000000006000830152602082019050919050565b60006109c3601183610c08565b91507f726573706f6e7365206d69736d617463680000000000000000000000000000006000830152602082019050919050565b6000610a03600883610c08565b91507f21737563636573730000000000000000000000000000000000000000000000006000830152602082019050919050565b6000610a43601783610c08565b91507f726573706f6e7365206279746573206d69736d617463680000000000000000006000830152602082019050919050565b6000610a828284610945565b915081905092915050565b60006020820190508181036000830152610aa681610976565b9050919050565b60006020820190508181036000830152610ac6816109b6565b9050919050565b60006020820190508181036000830152610ae6816109f6565b9050919050565b60006020820190508181036000830152610b0681610a36565b9050919050565b6000604051905081810181811067ffffffffffffffff82111715610b3457610b33610c97565b5b8060405250919050565b600067ffffffffffffffff821115610b5957610b58610c97565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610b8557610b84610c97565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610bb157610bb0610c97565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610bdd57610bdc610c97565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610c2482610c35565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b83811015610c82578082015181840152602081019050610c67565b83811115610c91576000848401525b50505050565bfe5b610ca281610c19565b8114610cad57600080fd5b50565b610cb981610c2b565b8114610cc457600080fd5b5056fea26469706673582212206d8719bc335de70d87a14ccf73f40ff22b5e087a8eef0b0c954740af95542dcd64736f6c63430007030033";
