import React from 'react';
// import { useHistory } from 'react-router-dom';
import { signOutUser } from '../api/auth';

export default function Navigation() {
//   const history = useHistory();

  return (
    <div>
      <button
        onClick={signOutUser}
        type="button"
        className="btn btn-success"
      >
        LOGOUT
      </button>
    </div>
  );
}
