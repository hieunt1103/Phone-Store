import React, { useState } from 'react';
import { Modal } from 'antd';

const ConfirmDeleteModal = ({ isModalDeleteOpen, handleConfirmDelete, onCancel }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const handleOk = async () => {
        setIsDeleting(true);
        await handleConfirmDelete();
        setIsDeleting(false);
    };
    return (
        <Modal
            title="Confirm Deletion"
            visible={isModalDeleteOpen}
            onOk={handleOk}
            onCancel={onCancel}
            okText="Yes"
            cancelText="No"
            confirmLoading={isDeleting}
        >
            <p>Are you sure you want to delete this product?</p>
        </Modal>
    );
};

export default ConfirmDeleteModal;
