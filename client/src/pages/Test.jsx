import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Modal from 'react-modal';

const Test = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalAnimation = useSpring({
    opacity: modalIsOpen ? 1 : 0,
    transform: modalIsOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)',
  });

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Attractive Popup</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          },
          content: {
            width: '300px',
            height: '200px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '8px',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            border: '2px solid #4CAF50',
          },
        }}
      >
        <animated.div style={modalAnimation}>
          <h2 style={{ margin: '20px 0', textAlign: 'center', color: '#4CAF50' }}>Attractive Popup</h2>
          <p style={{ textAlign: 'center' }}>This is some attractive content inside the popup.</p>
          <button
            style={{
              display: 'block',
              margin: 'auto',
              padding: '10px 20px',
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => setModalIsOpen(false)}
          >
            Close Popup
          </button>
        </animated.div>
      </Modal>
    </div>
  );
};

export default Test;


