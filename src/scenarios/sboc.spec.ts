import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('1 - verificar navegação para a página inicial', async ({ page }) => {
    await page.goto('https://sboc.org.br');

    const aiArgs = { page, test };
    await ai('verificar se a página inicial foi carregada corretamente', aiArgs);
});

test('2 - preencher formulário de contato', async ({ page }) => {
    await page.goto('https://sboc.org.br/contato');  // Supondo que a URL seja /contato

    const aiArgs = { page, test };
    await ai('preencher o formulário de contato com nome, e-mail e mensagem e enviar', aiArgs);
});

test('3 - realizar pesquisa no site', async ({ page }) => {
    await page.goto('https://sboc.org.br');

    const aiArgs = { page, test };
    await ai('clicar na barra de pesquisa, digitar "Congresso" e verificar resultados', aiArgs);
});

test('4 - acessar área do associado', async ({ page }) => {
    await page.goto('https://sboc.org.br/login');

    const aiArgs = { page, test };
    await ai('fazer login com usuário e senha válidos e verificar acesso à área restrita', aiArgs);
});
