import { useState } from 'react';
import './App.css';
import * as api from './api/api';
import Login from './components/Login';
import CompanyList from './components/CompanyList';
import FullCompany from './components/FullCompany';
import MyModal from './components/Modal';
import { FullCompanyType } from './types/fullCompany';

function App() {
  const [company, setCompany] = useState<FullCompanyType | undefined>();
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState('');
  const [finishCredits, setFinishCredits] = useState(false);

  const getUserCredits = async () => {
    const response = await api.getUserCredits();
    console.log(response);

    setFinishCredits(response < 1);
    return response;
  };

  const getFullCompany = async (name: string) => {
    await getUserCredits();
    const response = await api.getFullCompanyByName(name);

    setCompany(response);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setLogged(false);
  };

  const login = async (name: string, password: string) => {
    const response = await api.loginByUserNameAndPassword(name, password);
    console.log(response);
    if (response.token) {
      localStorage.setItem('token', response.token);
      setLogged(true);
      setError('');
      await getUserCredits();
    } else {
      setError('failed to login');
    }
  };

  const onSubmitLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = e.target as unknown as { value: string }[];
    const name = values[0].value;
    const password = values[1].value;

    login(name, password);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '50px',
        boxSizing: 'border-box',
        marginBottom: '20px',
      }}
    >
      {finishCredits && (
        <MyModal
          message='Oops! You’re out of credits. Contact the administrators'
          open={finishCredits}
          close={() => setFinishCredits(false)}
        />
      )}
      <div>
        <div style={{ display: 'flex', width: '100%' }}>
          <h1 style={{ flex: '50%' }}>Companies</h1>
          {logged && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button style={{ height: '30%' }} onClick={logout}>
                logout
              </button>
            </div>
          )}
        </div>
        <hr />
      </div>
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {!logged && <Login onSubmitLoginForm={onSubmitLoginForm} />}
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        </div>
        {logged && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
              }}
            >
              <CompanyList getFullCompany={getFullCompany} />
            </div>
            {company && <FullCompany company={company} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
