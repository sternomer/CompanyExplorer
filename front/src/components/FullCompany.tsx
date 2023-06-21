import { FullCompanyType } from '../types/fullCompany';

const FullCompany = ({ company }: { company: FullCompanyType }) => {
  return (
    <div
      style={{
        width: '50%',
        border: '1px solid black',
        borderRadius: '20px',
        backgroundColor: 'lightgray',
      }}
    >
      {company && (
        <>
          <h1>{company.name}</h1>
          <p>{company.website}</p>
          <p>{company.size}</p>
          <p>{company.location}</p>
          <p>{company.logo_url}</p>
          <p>{company.website_url}</p>
          <p>{company.employees_count}</p>
          <p>{company.revenue_in_usd}</p>
          <p>{company.industry}</p>
          <p>{company.intent_topic}</p>
          <p>{company.intent_dates}</p>
          <p>{company.about}</p>
          <p>{company.active_wallets}</p>
          <p>{company.token_name}</p>
          <p>{company.tvl_usd}</p>
          <p>{company.smart_contract_count}</p>
        </>
      )}
    </div>
  );
};

export default FullCompany;
