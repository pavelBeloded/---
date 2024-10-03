<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head><title>table</title> 
</head>
<body>
<h1>Товары интернет-магазина</h1>
<table border="1">
    <thead>
        <tr>
            <th>Бренд</th>
            <th>Модель</th>
            <th>Артикул</th>
            <th>Цена</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
         <xsl:for-each select="catalog/products/prod">
         <xsl:sort  order="ascending" />
            <tr>
                <xsl:for-each select="./title">
                    <td><xsl:value-of select="brand"/></td>
                    <td><xsl:value-of select="model"/></td>
                </xsl:for-each>
            <td><xsl:value-of select="articul"/></td>
            <td><xsl:value-of select="price"/></td>
            <td><xsl:value-of select="desc"/></td>
            </tr>
      </xsl:for-each>
    </tbody>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>