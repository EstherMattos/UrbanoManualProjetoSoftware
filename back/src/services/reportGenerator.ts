import PDFDocument from 'pdfkit-table';
import fs from 'fs';

interface Despesas {
  id: number;
  tipo: string;
  descricao: string;
  valor: number;
  residenciaId: number;
}

class ReportGenerator {
  residenciaId: number;
  documentOutputName: string;
  constructor(residenciaId: number, documentOutputName: string) {
    this.residenciaId = residenciaId;
    this.documentOutputName = documentOutputName;
  }

  convertItemsToString(data: any): string[][] {
    return [['a']];
  }
}

class DespesasReportGenerator extends ReportGenerator {
  despesas: Despesas;
  constructor(
    residenciaId: number,
    documentOutputName: string,
    despesas: Despesas
  ) {
    super(residenciaId, documentOutputName);
    this.despesas = despesas;
  }

  async generateReport() {
    const doc = new PDFDocument({ margin: 30, size: 'A4' });
    doc.pipe(fs.createWriteStream(`./${this.documentOutputName}.pdf`));

    const table = {
      title: `RELATORIO DE DESPESAS DA RESIDENCIA ${this.residenciaId}`,
      subtitle: 'todo o periodo da residencia',
      headers: ['ID', 'TIPO', 'DESCRICAO', 'VALOR', 'RESIDENCIA'],
      rows: this.convertItemsToString(this.despesas),
    };

    await doc.table(table, {
      columnsSize: [100, 100, 100, 100, 100],
    });

    doc.end();
  }
}
