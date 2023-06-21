type Props = {
  onSubmitLoginForm: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Login = ({ onSubmitLoginForm }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        alignItems: 'center',
      }}
    >
      <form onSubmit={onSubmitLoginForm}>
        <input type='text' placeholder='name' />
        <input type='text' placeholder='password' />
        <button>login</button>
      </form>
    </div>
  );
};

export default Login;
