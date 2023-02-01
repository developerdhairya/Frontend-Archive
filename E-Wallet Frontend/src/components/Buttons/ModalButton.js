import React from 'react';

import Modal from 'react-modal';

import RegistrationForm from '../Forms/registrationForm';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement(document.getElementById('root'));


const ModalButton = (props) => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }



    return <React.Fragment>
        <div class="flex space-x-2 justify-center">
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      onClick={openModal}
    >{props.text}</button>
  </div>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        > <button onClick={closeModal}>close</button>
            <RegistrationForm/>

        </Modal>


    </React.Fragment>
}

export default ModalButton;