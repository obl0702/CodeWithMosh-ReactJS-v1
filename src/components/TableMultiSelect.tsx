import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface DataItem {
  id: number;
  name: string;
  selected: boolean;
  status: "Pending" | "Rejected" | "Accepted" | "Cancelled";
}

const TableMultiSelect = () => {
  const initialData: DataItem[] = [
    { id: 1, name: "Item 1", selected: false, status: "Pending" },
    { id: 2, name: "Item 2", selected: false, status: "Rejected" },
    { id: 3, name: "Item 3", selected: false, status: "Accepted" },
    { id: 4, name: "Item 4", selected: false, status: "Cancelled" },
    { id: 5, name: "Item 5", selected: false, status: "Pending" },
  ];

  const [data, setData] = useState<DataItem[]>(initialData);
  const [selectAll, setSelectAll] = useState(false);

  /**
   * Handles the checkbox change event for an individual item in the table.
   * @param id - The unique identifier of the item.
   */
  const handleCheckboxChange = (id: number) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setData(updatedData);
    setSelectAll(updatedData.every((item) => item.selected));
  };

  /**
   * Handles the checkbox change event for the "Check All" checkbox in the table header.
   */
  const handleSelectAllChange = () => {
    const updatedData = data.map((item) => ({ ...item, selected: !selectAll }));
    setData(updatedData);
    setSelectAll(!selectAll);
  };

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Handles the update selected items functionality when the "Update Selected" button is clicked.
   * Returns false if any of the selected items are "Accepted" or "Cancelled".
   */
  const handleUpdateSelected = async () => {

    const selectedItems = data.filter((item) => item.selected);


    if (selectedItems.length === 0) {
        console.log("No Items is selected");
      }

    const hasAcceptedOrCancelled = selectedItems.some((item) =>
      ["Accepted", "Cancelled"].includes(item.status)
    );

    if (hasAcceptedOrCancelled) {
      // Add your specific handling when any of the selected items are "Accepted" or "Cancelled"
      console.log("Failed... hasAcceptedOrCancelled");
      return false;
    }else{
        console.log("Result is ok");
    }

    console.log("Selected Items:", selectedItems);
    // Perform your update logic here

    //Map to number[]
    const selectedIds = selectedItems.map((item) => item.id);
    console.log("selectedIds:", selectedIds);

    const updatedDataItem = updateStatusInDataItem(data, selectedIds, "Annulled");
    console.log(updatedDataItem);
    
  };

  /**
   * Updates the status of items in the data array based on the selected IDs.
   * Returns a new array with the updated items.
   * 
   * @param data The array of items to update.
   * @param selectedIds The selected IDs to check for status update.
   * @param status The new status to assign to the selected items.
   * @returns A new array with the updated items.
   */
  const updateStatusInDataItem = (data: DataItem[], selectedIds: number[], status: string) => {
    return data.map((item) => ({
      ...item,
      status: selectedIds.includes(item.id) ? status : item.status,
    }));
  };

  const performUpdate = (selectedItems: DataItem[]): void => {
    fetch('/api/updateItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedItems),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response
        console.log('Update Successful:', data);
        fetchData();
        showSuccessNotification();
      })
      .catch((error) => {
        // Handle API error
        console.error('Update Error:', error);
        showErrorNotification();
      });
  };

  const showSuccessNotification = (): void => {
    // Add code to show success notification
  };
  
  const showErrorNotification = (): void => {
    // Add code to show error notification
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
              />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleUpdateSelected}>Update Selected</button>
    </div>
  );
};

export default TableMultiSelect;
