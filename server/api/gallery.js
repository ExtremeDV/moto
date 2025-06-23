import { readdir, stat } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async () => {
  const galleryPath = join(process.cwd(), 'public', 'images', 'gallery')
  const files = await readdir(galleryPath)
  const imageFiles = files.filter(file => file.endsWith('.jpeg') || file.endsWith('.jpg'))

  // Получаем метаданные файлов для сортировки по дате
  const filesWithStats = await Promise.all(imageFiles.map(async file => {
    const filePath = join(galleryPath, file)
    const stats = await stat(filePath)
    return { file, mtime: stats.mtime }
  }))

  // Сортируем по дате изменения (от новых к старым)
  filesWithStats.sort((a, b) => b.mtime - a.mtime)

  // Возвращаем пути к изображениям
  return filesWithStats.map(item => `/images/gallery/${item.file}`)
})