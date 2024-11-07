interface TransactionParams {
  params: {
    id: string;
  };
}

const Transaction = ({ params: { id } }: TransactionParams) => {
  return <h1>Transaction ID: {id}</h1>;
};

export default Transaction;
