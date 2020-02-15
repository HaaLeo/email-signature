'use strict';

const mustache = require('mustache')
const { promisify } = require('util')
const fs = require('fs')

const readdir = promisify(fs.readdir)

async function main() {
    const outDir = './out/'
    const configPath = './config/'
    const signaturePath = './signatures/'

    // Read files
    const [configFiles, signatureFiles] = await Promise.all([readdir(configPath), readdir(signaturePath)])

    // Load config
    const configs = configFiles.map(file => require(configPath + file))

    // Read templates
    const templates = signatureFiles.map(file => fs.readFileSync(signaturePath + file).toString())

    // Render templates
    const matrix = configs.map(
        config => templates.map(
            template => mustache.render(template, config)
        )
    )

    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
    }

    for (const [configIndex, mapping] of matrix.entries()) {
        for (const [templateIndex, view] of mapping.entries()) {

            const templateName = signatureFiles[templateIndex].split('.')[0]
            const name = configs[configIndex].name.replace(' ', '_').toLowerCase()
            fs.writeFileSync(`${outDir + name}_${templateName}.html`, view)
        }
    }
}


main()
