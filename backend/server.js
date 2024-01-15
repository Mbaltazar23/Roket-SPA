const express = require('express');
const cors = require('cors'); // Importa el middleware CORS
const arbolesRoutes = require('./routes/arbolesRoutes');
const fotosRoutes = require('./routes/fotosRoutes');
const comentariosRoutes = require('./routes/comentariosRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Configura CORS
app.use(cors());

app.use(express.json());

// Rutas específicas para cada recurso
app.use('/api/arboles', arbolesRoutes);
app.use('/api/fotos', fotosRoutes);
app.use('/api/comentarios', comentariosRoutes);

app.listen(port, () => {
  console.log(`Servidor API iniciado en http://localhost:${port}`);
});
