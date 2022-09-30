import React from 'react';
import { Avatar, List, Button, Tag } from 'react-dsgov';

/**
 * Componente de Avatar da header
 * @returns {JSX.Element}
 * @constructor
 */
const AvatarComponent = () => {
  return (
    <Avatar imageSrc="https://picsum.photos/id/1005/400" dropdown>
      <List>
        <Button isItem>
          <Tag type="status" density="small" status="warning" />
          <span className="text-bold">Título</span>
          <span className="d-block text-medium mb-2">25 de out</span>
        </Button>
        <Button isItem>
          <Tag type="status" density="small" status="warning" />
          <span className="text-bold">Título</span>
          <span className="d-block text-medium mb-2">25 de out</span>
        </Button>
        <Button isItem>
          <Tag type="status" density="small" status="warning" />
          <span className="text-bold">Título</span>
          <span className="d-block text-medium mb-2">25 de out</span>
        </Button>
      </List>
    </Avatar>
  );
};

export default AvatarComponent;
