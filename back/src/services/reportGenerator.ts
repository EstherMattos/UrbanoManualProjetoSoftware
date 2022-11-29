import PDFDocument from 'pdfkit-table';
import fs from 'fs';

export const generateReport = async (residencia: number, despesas: any[]) => {
  const doc = new PDFDocument({ margin: 30, size: 'A4' });
  doc.pipe(fs.createWriteStream('./output.pdf'));

  const table = {
    title: `RELATORIO DE DESPESAS DA RESIDENCIA ${residencia}`,
    subtitle: 'todo o periodo da residencia',
    headers: ['ID', 'TIPO', 'DESCRICAO', 'VALOR', 'RESIDENCIA'],
    rows: [
      ['1', 'fixa', 'luz', '420', '1'],
      ['2', 'fixa', 'despesa de luz', '420', '1'],
    ],
  };

  await doc.table(table, {
    columnsSize: [100, 100, 100, 100, 100],
  });

  doc.end();
};
