import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContentDisplay = ({ endpoint, objectType, editComponent: ItemEdit}) => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [initialFetch, setInitialFetch] = useState(true);
    const [editItemId, setEditItemId] = useState(null);
    const [refreshData, setRefreshData] = useState(false);


    useEffect(() => {
        if (initialFetch || refreshData) {
        fetchItemsData();
        setInitialFetch(false);
        setRefreshData(false);
        }
    }, [initialFetch, refreshData]);

    const fetchItemsData = async () => {
        try {
        const response = await axios.get(endpoint);
        const itemsData = response.data;
        setItems(itemsData);
        } catch (error) {
        console.error(`Error retrieving ${objectType} data:`, error);
        }
    };

    const handleEdit = (id) => {
        setEditItemId(id);
    };


    const handleUpdate = () => {
        setEditItemId(null);
        setRefreshData(true);
    };

    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete this ${objectType}?`)) {
        axios
            .delete(`${endpoint}/${id}`)
            .then((response) => {
            console.log(response.data.message);
            setRefreshData(true);
            })
            .catch((error) => {
            console.error(`Error deleting ${objectType}:`, error);
            });
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const mapItems = currentItems.map((item) => {
    if (item.id === editItemId) {
        return (
            <React.Fragment key={item.id}>
                <tr>
                    <td colSpan="5">
                        <ItemEdit item={item} objectType={objectType} onUpdate={handleUpdate} />
                    </td>
                </tr>
            </React.Fragment>
        );
    }

    return (
      <tr key={item.id}>
        <td className="cms-content-tbl-data">{item.id}</td>
        <td className="cms-content-tbl-data">{item.name}</td>
        <td className="cms-content-tbl-data">{item.filename}</td>
        <td className="cms-content-tbl-data">
          <img src={`data:image/png;base64,${item.image}`} alt={item.name} width="50px" height="50px" />
        </td>
        <td className="cms-content-tbl-data">
          <span className="action-edit" onClick={() => handleEdit(item.id)}>Edit</span>
          <span className="action-delete" onClick={() => handleDelete(item.id)}>Delete</span>
        </td>
      </tr>
    );
    });

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(items.length / itemsPerPage);

    return (
        <div className='cms-content-container'>
        <table className="cms-content-tbl">
            <thead>
            <tr>
                <th className="cms-content-tbl-head">Id</th>
                <th className="cms-content-tbl-head">Name</th>
                <th className="cms-content-tbl-head">File Name</th>
                <th className="cms-content-tbl-head">Image</th>
                <th className="cms-content-tbl-head">Action</th>
            </tr>
            </thead>
            <tbody>{mapItems}</tbody>
        </table>
        <div className="cms-content-pagination">
            {/* Pagination links */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
                className={`cms-content-pagination-num ${currentPage === page ? 'active-pagination' : ''}`}
                key={page}
                onClick={() => paginate(page)}
            >
                {page}
            </button>
            ))}
        </div>
        </div>
    );
    };

export default ContentDisplay;
