import React, {Component} from 'react';
import {Table, Tag} from 'antd';
import {DeleteTwoTone} from '@ant-design/icons';


class AntTbl extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "My Ant Table Experiments"
        }
    }

    handleDelete = () => {
        alert('About to delete the record.');
    };

    render(){
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            render: text => <button>{text}</button>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              render: tags => (
                <span>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </span>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <button style={{marginRight: 16 }}>Invite {record.name}</button>
                  <DeleteTwoTone 
                    onClick={this.handleDelete}
                    twoToneColor='#eb2f96' 
                  />

                </span>
              ),
            },
          ];

          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];

        return(
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <Table 
                    columns={columns} 
                    dataSource={data}
                    bordered
                    title={() => 'Header'}
                    footer={() => 'Footer'}
                />
            </React.Fragment>
        );
    };
} 

export default AntTbl;