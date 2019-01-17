import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: "Make",
          field: "make"
        },
        {
          headerName: "Model",
          field: "model"
        },
        {
          headerName: "Price",
          field: "price",
          filter: "agNumberColumnFilter"
        }
      ],
      rowData: [
        {
          id: "aa",
          make: "Toyota",
          model: "Celica",
          price: 35000
        },
        {
          id: "bb",
          make: "Ford",
          model: "Mondeo",
          price: 32000
        },
        {
          id: "cc",
          make: "Porsche",
          model: "Boxter",
          price: 72000
        },
        {
          id: "dd",
          make: "BMW",
          model: "5 Series",
          price: 59000
        },
        {
          id: "ee",
          make: "Dodge",
          model: "Challanger",
          price: 35000
        },
        {
          id: "ff",
          make: "Mazda",
          model: "MX5",
          price: 28000
        },
        {
          id: "gg",
          make: "Horse",
          model: "Outside",
          price: 99000
        }
      ],
      defaultColDef: {
        editable: true,
        sortable: true,
        filter: true
      },
      getRowNodeId: function (data) {
        return data.id;
      }
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  updateSort() {
    this.gridApi.refreshClientSideRowModel("sort");
  }
  updateFilter() {
    this.gridApi.refreshClientSideRowModel("filter");
  }
  setPriceOnToyota() {
    var rowNode = this.gridApi.getRowNode("aa");
    var newPrice = Math.floor(Math.random() * 100000);
    rowNode.setDataValue("price", newPrice);
  }
  setDataOnFord() {
    var rowNode = this.gridApi.getRowNode("bb");
    var newPrice = Math.floor(Math.random() * 100000);
    var newModel = "T-" + Math.floor(Math.random() * 1000);
    var newData = {
      id: "bb",
      make: "Ford",
      model: newModel,
      price: newPrice
    };
    rowNode.setData(newData);
  }
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ height: "100%", paddingTop: "35px", boxSizing: "border-box" }}>
          <div
            id="myGrid"
            style={{
              height: "100%",
              width: "100%"
            }}
            className="ag-theme-balham"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
              defaultColDef={this.state.defaultColDef}
              animateRows={true}
              getRowNodeId={this.state.getRowNodeId}
              onGridReady={this.onGridReady}
            />
          </div>
        </div>

        <div style={{ position: "absolute", top: "0px", left: "0px" }}>
          <button onClick={this.setPriceOnToyota.bind(this)}>Set Price on Toyota</button>
          <button onClick={this.setDataOnFord.bind(this)}>Set Data on Ford</button>
          &nbsp; &nbsp; &nbsp;
          <button onClick={this.updateSort.bind(this)}>Sort</button>
          <button onClick={this.updateFilter.bind(this)}>Filter</button>
        </div>
      </div>
    );
  }
}

export default App;
