 {/* <input
            {...register('title')}
            type="text"
            placeholder="Nome do produto"
          /> */}
        {/* </InputField> */}

        <InputField
          // label="description"
          // register={register}
          errors={errors.description?.message}
        >
          {/* <input
            {...register('description')}
            type="text"
            placeholder="Descrição do produto"
          /> */}
        </InputField>

        <InputField
          // label="photoUrl"
          // register={register}
          errors={errors.photoUrl?.message}
        >
          {/* <input
            {...register('photoUrl')}
            type="text"
            placeholder="URL da imagem do produto"
            disabled={!!formDefault.photoUrl}
          /> */}
        </InputField>

        <InputField
          // label="price"
          // register={register}
          errors={errors.price?.message}
        >
          {/* <input
            {...register('price', {
              required: 'Este campo é obrigatório',
              min: {
                value: 1,
                message: 'O preço deve ser maior que 1',
              },
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Preço do produto"
            min={0}
          /> */}
        </InputField>