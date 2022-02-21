import React from 'react';
import {} from '@testing-library/react';
import axios from 'axios';


test('request graphql api to get songs', async () => {
    const url = 'http://localhost:3000/dev/graph';
    const data = {
        query: `
          query {
            song(id: 321) {
              id
              song
            }
          }`
      };
    const response = await axios.post(
        url,
        data,
        {headers: {'Content-header': 'aplication/json'}}
    );

    expect(Object.keys(response.data)).toContain('data');
});