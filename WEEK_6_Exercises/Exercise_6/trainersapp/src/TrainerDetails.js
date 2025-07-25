// src/TrainerDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import trainers from './TrainersMock';

const TrainerDetail = () => {
  const { id } = useParams();
  const trainer = trainers.find((t) => t.TrainerId === parseInt(id));

  return (
    <div>
      {trainer ? (
        <>
          <h2>{trainer.Name}</h2>
          <p><strong>Email:</strong> {trainer.Email}</p>
          <p><strong>Phone:</strong> {trainer.Phone}</p>
          <p><strong>Technology:</strong> {trainer.Technology}</p>
          <p><strong>Skills:</strong> {trainer.Skills.join(', ')}</p>
        </>
      ) : (
        <p>Trainer not found.</p>
      )}
    </div>
  );
};

export default TrainerDetail;
