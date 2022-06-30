<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

#require_once dirname(__DIR__,1).'/dbconfigyyc.php';
require_once dirname(__DIR__,1).'/library/fpdf.php');

print ("Here");

$pdf = new FPDF('P','in','Letter');
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,10,'Hello World!');
$pdf->Output();
#$pdf->Output(D,'Report.pdf', true);
?>