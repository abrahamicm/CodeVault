Sub MostrarEnlacesHipervinculosEnDocumento()
    Dim hipervinculo As Hyperlink
    Dim textoHipervinculos As String
    
    For Each hipervinculo In ActiveDocument.Hyperlinks
        If Left(hipervinculo.Address, 4) = "http" Then
            textoHipervinculos = textoHipervinculos & hipervinculo.Address & vbCrLf
        End If
    Next hipervinculo
    
    If Len(textoHipervinculos) > 0 Then
        ActiveDocument.Content.InsertAfter textoHipervinculos
    Else
        MsgBox "No se encontraron hipervínculos web.", vbInformation, "Hipervínculos Web"
    End If
End Sub
