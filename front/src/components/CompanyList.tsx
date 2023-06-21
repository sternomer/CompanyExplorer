import { useState, useEffect } from 'react';
import * as api from '../api/api';
import { BasicCompany } from '../types/basicCompany';

type Props = {
  getFullCompany: (name: string) => void;
};

const CompanyList = ({ getFullCompany }: Props) => {
  const [companies, setCompanies] = useState([]);

  const getBasicCompany = async () => {
    const response = await api.getBasicCompany();

    setCompanies(response);
  };

  useEffect(() => {
    getBasicCompany();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-evenly' }}>
      {companies.map((company: BasicCompany, i) => (
        <div
          style={{ width: '40%', border: '2px solid black', borderRadius: '20px', marginBottom: '10px' }}
          key={company._id}
          onClick={async () => {
            getFullCompany(company.name);
          }}
        >
          <h2>
            {i + 1}:{company.name}
          </h2>
          <p>{company.location}</p>
          <p>{company.size}</p>
          <p>{company.website}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;
