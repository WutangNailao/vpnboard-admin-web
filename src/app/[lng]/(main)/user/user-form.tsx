'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n';
import { postAdminProductList } from '@/services/api/admin';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify/react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';

interface NoticeFormProps<T> {
  onSubmit: (data: T) => Promise<boolean> | boolean;
  initialValues?: T;
  loading?: boolean;
  trigger: string;
  title: string;
}

export default function UserForm<T extends Record<string, any>>({
  onSubmit,
  initialValues,
  loading,
  trigger,
  title,
}: NoticeFormProps<T>) {
  const { lng } = useParams<{ lng: string }>();
  const { t } = useTranslation(lng, 'user');

  const [open, setOpen] = useState(false);
  const formSchema = z.object({
    user_name: z.string().email(t('user.invalidEmailFormat')),
    password: z.string().optional(),
    product_id: z.number().optional(),
    duration: z.number().optional(),
    referer_username: z.string().email(t('user.invalidEmailFormat')).optional(),
    refer_code: z.string().optional(),
    is_manager: z.boolean().optional(),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...initialValues,
    },
  });

  useEffect(() => {
    form?.reset(initialValues);
  }, [form, initialValues]);

  async function handleSubmit(data: { [x: string]: any }) {
    const bool = await onSubmit(data as T);
    if (bool) setOpen(false);
  }

  const { data } = useQuery({
    queryKey: ['postAdminProductList'],
    queryFn: async () => {
      const { data } = await postAdminProductList();
      return data.data;
    },
  });

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size='sm'
          onClick={() => {
            form.reset();
            setOpen(true);
          }}
        >
          {trigger}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <ScrollArea className='-mx-6 h-[calc(100vh-48px-36px-36px)]'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4 px-6 pt-4'>
              <FormField
                control={form.control}
                name='user_name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('user.userEmail')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('user.userEmailPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('user.password')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('user.passwordPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='product_id'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('user.assignProduct')}</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(Number(value));
                        }}
                        defaultValue={field.value && String(field.value)}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('user.productPlaceholder')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {data?.list?.map((item: API.Product) => (
                            <SelectItem key={item.id} value={String(item.id)}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='duration'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('user.duration')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t('user.durationPlaceholder')}
                        {...field}
                        type='number'
                        value={field.value ? Number(field.value) : undefined}
                        onChange={(e) => {
                          field.onChange(e.target.value ? Number(e.target.value) : undefined);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='referer_username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('user.refererEmail')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('user.refererEmailPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='refer_code'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('user.inviteCode')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('user.inviteCodePlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='balance'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('user.balance')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t('user.balancePlaceholder')}
                        {...field}
                        type='number'
                        value={field.value ? Number(field.value) : undefined}
                        onChange={(e) => {
                          field.onChange(e.target.value ? Number(e.target.value) : undefined);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='is_manager'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('user.manager')}</FormLabel>
                    <FormControl>
                      <div className='pt-2'>
                        <Switch checked={!!field.value} onCheckedChange={field.onChange} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </ScrollArea>
        <SheetFooter className='flex-row justify-end gap-2 pt-3'>
          <Button
            variant='outline'
            disabled={loading}
            onClick={() => {
              setOpen(false);
            }}
          >
            {t('user.cancel')}
          </Button>
          <Button disabled={loading} onClick={form.handleSubmit(handleSubmit)}>
            {loading && <Icon icon='mdi:loading' className='mr-2 animate-spin' />}{' '}
            {t('user.confirm')}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
