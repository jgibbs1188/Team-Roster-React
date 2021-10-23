import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createPlayer, updatePlayers } from '../api/data/teamData';

const initialState = {
  id: '',
  name: '',
  position: '',
  imageUrl: '',
  uid: '',
};

export default function NewPlayerForm({
  user, obj = {}, setPlayers, setEditItem,
}) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setFormInput({
        id: obj.id,
        name: obj.name,
        position: obj.name,
        imageUrl: obj.imageUrl,
        firebaseKey: obj.firebaseKey,
        uid: user.uid,
      });
    }
    return () => {
      isMounted = false;
    };
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleIdChange = (e) => {
    const { id, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [id]: Number(value),
    }));
  };

  const resetForm = () => {
    setFormInput({});
    setEditItem({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updatePlayers({ ...formInput }).then((player) => {
        setPlayers(player);
        resetForm();
      });
    } else {
      createPlayer({ ...formInput }).then((player) => {
        setPlayers(player);
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">
          Number
          <input type="number" id="id" name="id" value={formInput.id} onChange={handleIdChange} required />
        </label>
        <label htmlFor="name">
          Name
          <input type="text" id="name" name="name" value={formInput.name} onChange={handleChange} required />
        </label>
        <label htmlFor="position">
          Position
          <input type="text" id="position" name="position" value={formInput.position} onChange={handleChange} required />
        </label>
        <label htmlFor="imageUrl">
          Image
          <input type="text" id="imageUrl" name="imageUrl" value={formInput.imageUrl} onChange={handleChange} required />
        </label>
        <button type="submit" color="success" onClick={(e) => handleSubmit(e)}>
          SUBMIT
        </button>
      </form>
    </>
  );
}

NewPlayerForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    position: PropTypes.string,
    imageUrl: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
