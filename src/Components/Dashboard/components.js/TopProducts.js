import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '../../Button/Button';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { userdata } from '../../../api/api';
import "./style.css";

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await userdata();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "70px" }}>
        <div>
          <Typography variant="h5" color="black">
            Top Products
          </Typography>
        </div>
        <div>
          <Button props={"Full result"} />
        </div>
      </div>

      <div style={{ marginTop: "20px", textAlign: "start" }}>
        <Table>
          <Thead className ='thead'>
            <Tr className ="tr">
              <Th className="th-center">Product</Th>
              <Th className="th-center">Sold amount</Th>
              <Th className="th-center">Unit price</Th>
              <Th className="th-center">Revenue</Th>
              <Th className="th-center">Rating</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, index) => (
              <Tr key={index}>
                <Td className="th-center th-1">{product.Product}</Td>
                <Td className="th-center">{product.sold_amount}</Td>
                <Td className="th-center">{product.unit_price}</Td>
                <Td className="th-center">{product.revenue}</Td>
                <Td className="th-center">{product.rating}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default TopProducts;
