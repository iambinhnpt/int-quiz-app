import React from "react";
import { List, Typography } from "antd";

export default function Advisors(props) {
  return (
    <div>
      {props.item.displayName}
      <List
       size="small"
        header={<div>Category: </div>}
        bordered
        dataSource={props.item.categoriesCollection.items}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[Category]</Typography.Text> {item.displayName}
          </List.Item>
        )}
      />
    </div>
  );
}
