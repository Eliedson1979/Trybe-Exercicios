// src/tests/integration/chocolates.test.js
  // ... outros testes ...

  describe('Usando o método GET em /chocolates/total', function () {
      it('Retorna a quantidade total de chocolates', async function () {
        const response = await chai.request(app)
          .get('/chocolates/total');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal({ totalChocolates: 4 });
    });
  });
// });