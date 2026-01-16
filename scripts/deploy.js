const fs = require('fs');
const path = require('path');

// Fonte e destino
const outDir = path.join(__dirname, '../out');
const rootDir = path.join(__dirname, '..');

// Ficheiros e pastas a copiar
const itemsToCopy = [
  'index.html',
  'about.html',
  'contact.html',
  '_next',
  'assets',
];

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`Origem não existe: ${src}`);
    return;
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  files.forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

console.log('📦 Copiando ficheiros do out/ para a raiz...');

itemsToCopy.forEach((item) => {
  const srcPath = path.join(outDir, item);
  const destPath = path.join(rootDir, item);

  if (fs.existsSync(srcPath)) {
    if (fs.lstatSync(srcPath).isDirectory()) {
      // Remove a pasta de destino se existir
      if (fs.existsSync(destPath)) {
        fs.rmSync(destPath, { recursive: true, force: true });
      }
      copyRecursive(srcPath, destPath);
      console.log(`✅ ${item}/`);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✅ ${item}`);
    }
  }
});

console.log('\n✨ Deploy pronto! Agora faz: git add . && git commit && git push\n');
