import React from 'react';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../api/auth';

export default function Navigation() {
  const history = useHistory();

  return (
    <div>
      <button
        onClick={() => history.push('/')}
        type="button"
        className="btn btn-success"
      >
        TEAM
      </button>
      <button
        onClick={() => history.push('/new')}
        type="button"
        className="btn btn-info"
      >
        NEW
      </button>
      <button
        onClick={signOutUser}
        type="button"
        className="btn btn-danger"
      >
        LOGOUT
      </button>
    </div>
  );
}
